const USER_PREFERENCES = 'CopilotPreference'

let singleton;
const singletonEnforcer = Symbol();

const parseDataFile = (defaults) => {
  try {
    const settings = localStorage.getItem(USER_PREFERENCES);
    if (settings) return JSON.parse(settings);
    return {};
  } catch (error) {
    return defaults;
  }
};

const containsKey = (obj, key) => ({}.hasOwnProperty.call(obj || {}, key));

class CopilotPreferences {
  constructor(opts) {
    this.defaults = opts.defaults;
    this.data = parseDataFile(opts.defaults);
  }

  get(key, defaultValue) {
    if (containsKey(this.data, key)) {
      return this.data[key];
    }
    return defaultValue;
  }

  save(settings) {
    localStorage.setItem(USER_PREFERENCES, JSON.stringify(settings));
  }

  set(key, value) {
    this.data = parseDataFile(this.defaults);
    this.data[key] = value;
    this.save(this.data);
  }

  remove(key) {
    delete this.data[key];
    this.save(this.data);
  }

  parseDataFile() {
    this.data = parseDataFile(this.defaults);
  }

  contains(key) {
    return Object.prototype.hasOwnProperty.call(this.data, key);
  }
}
export default class UserPreferenceSingleton {
  static get FEATURES_LIST() {
    return 'features_module_list';
  }

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) throw new Error('Cannot construct singleton');

    this.userPreferences = new CopilotPreferences({
      configName: 'copilot-preference',
      defaults: {
        windowBounds: { width: 800, height: 600 }
      }
    });
  }

  static getInstance() {
    if (!singleton) {
      singleton = new UserPreferenceSingleton(singletonEnforcer);
    }
    return singleton;
  }

  static removeInstance() {
    singleton = undefined;
  }


  setFeatures(value) {
    return this.userPreferences.set(UserPreferenceSingleton.FEATURES_LIST, value);
  }

  getFeatures() {
    return this.userPreferences.get(UserPreferenceSingleton.FEATURES_LIST, undefined);
  }


  set(key, value) {
    this.userPreferences.set(key, value);
  }

  clearStoredUserData() {
    localStorage.removeItem(USER_PREFERENCES);
  }
}
