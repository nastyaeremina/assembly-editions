const getViewBox = (name) => {
  switch (name) {
    default:
      return '0 0 24 24';
  }
};

const getPath = (name) => {
  switch (name) {
    case 'find-expert-icon':
      return (
        <>
          <path
            fill='#7DDAA0'
            d='M3.056 3.429A3.05 3.05 0 0 1 6.103.38a3.05 3.05 0 0 1 3.048 3.048 3.05 3.05 0 0 1-3.048 3.047A3.05 3.05 0 0 1 3.056 3.43ZM7.43 11.68c0-1.262.586-2.353 1.424-3.173a.227.227 0 0 0 .068-.231c-.003-.009-.023-.129-.18-.162A5.333 5.333 0 0 0 7.62 8H4.573C1.48 8 .383 10.264.383 12.207c0 1.737.922 2.65 2.666 2.65h5.265c.13 0 .229-.098.229-.228a.224.224 0 0 0-.069-.16A4.207 4.207 0 0 1 7.43 11.68Zm8.213 3.962a.57.57 0 0 1-.808 0l-1.395-1.396c-.5.344-1.104.547-1.756.547a3.115 3.115 0 0 1-3.11-3.11 3.115 3.115 0 0 1 3.11-3.112 3.115 3.115 0 0 1 3.112 3.111c0 .652-.204 1.256-.547 1.756l1.395 1.396a.572.572 0 0 1-.001.808Zm-1.99-3.96a1.97 1.97 0 0 0-1.97-1.968 1.97 1.97 0 0 0-1.968 1.968 1.97 1.97 0 0 0 1.968 1.968 1.97 1.97 0 0 0 1.97-1.968Z'
          />
        </>
      );
    default:
      return <path />;
  }
};

const SVGComponent = ({
  name = '',
  style = {},
  fill = '',
  viewBox = '',
  height = '24',
  width = '24',
  className = '',
  strokeWidth = 1.5,
  bgfill = 'none',
  stroke = '',
  stopColor = ''
}) => (
  <svg
    stroke={stroke}
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink='http://www.w3.org/1999/xlink'>
    {getPath(name, { fill, strokeWidth, bgfill, stroke, stopColor })}
  </svg>
);

export default SVGComponent;
