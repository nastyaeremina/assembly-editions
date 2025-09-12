import { SectionStoryModeSectionComponentType, SectionTone } from '../../constants/constant';
import SectionComponent from '../sectionComponent/sectionComponent';
import StoryMode from '../StoryMode/storymode';

export default function SectionComponentAndStoryModeRenderer({ data }) {
  if (!data?.type) return null;

  switch (data.type) {
    case SectionStoryModeSectionComponentType.STORY_MODE_DARK:
      return <StoryMode tabsData={data.contentCollection?.items} />;
    case SectionStoryModeSectionComponentType.SECTION_COMPONENT_DARK:
      return (
        <SectionComponent
          tone={SectionTone.DARK}
          title={data.title}
          description={data.description}
          primaryButtonText={data.primaryButtonText}
          primaryButtonLink={data.primaryButtonLink}
          secondaryButtonText={data.secondaryButtonText}
          secondaryButtonLink={data.secondaryButtonLink}
          tabItems={data.contentCollection.items}
        />
      );
    case SectionStoryModeSectionComponentType.SECTION_COMPONENT_LIGHT:
      return (
        <SectionComponent
          tone={SectionTone.LIGHT}
          title={data.title}
          description={data.description}
          primaryButtonText={data.primaryButtonText}
          primaryButtonLink={data.primaryButtonLink}
          secondaryButtonText={data.secondaryButtonText}
          secondaryButtonLink={data.secondaryButtonLink}
          tabItems={data.contentCollection.items}
        />
      );
    default:
      return null;
  }
}
