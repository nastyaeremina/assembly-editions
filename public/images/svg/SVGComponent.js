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
    case 'dropdown-icon':
      return (
        <>
          <path
            stroke='#131313'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.929}
            d='m1.484 3.685 4.629 4.628 4.628-4.628'
            fill='none'
          />
        </>
      );
    case 'copilot-guide-icon':
      return (
        <>
          <path
            fill='#7DDAA0'
            d='M8 0a6.125 6.125 0 0 0-6.117 6.118v5.647c0 .778.633 1.412 1.412 1.412.778 0 1.411-.634 1.411-1.412V7.059c0-.779-.633-1.412-1.411-1.412-.159 0-.309.032-.451.08A5.18 5.18 0 0 1 8 .942a5.18 5.18 0 0 1 5.157 4.783 1.387 1.387 0 0 0-.45-.077c-.78 0-1.412.633-1.412 1.412v4.706c0 .778.633 1.412 1.411 1.412.166 0 .323-.034.471-.087v.557c0 .26-.211.47-.47.47H9.325A1.41 1.41 0 0 0 8 13.178c-.778 0-1.411.633-1.411 1.411C6.589 15.367 7.222 16 8 16a1.41 1.41 0 0 0 1.326-.941h3.38c.779 0 1.412-.633 1.412-1.412v-7.53A6.125 6.125 0 0 0 8 0ZM15.063 6.675v5.473a1.41 1.41 0 0 0 .94-1.325V8a1.41 1.41 0 0 0-.94-1.325ZM0 8v2.823c0 .613.395 1.13.941 1.325V6.675A1.41 1.41 0 0 0 0 8Z'
          />
        </>
      );
    case 'video-tutorials-icon':
      return (
        <>
          <path
            fill='#7DDAA0'
            d='M14.222 0H1.778C.79 0 0 .753 0 1.673v11.713c0 .92.791 1.673 1.778 1.673h12.444c.978 0 1.778-.753 1.778-1.673V1.673C16 .753 15.209 0 14.222 0Zm0 13.386H1.778V3.346h12.444v10.04ZM8 6.275c1.636 0 3.093.803 3.858 2.091-.765 1.288-2.222 2.091-3.858 2.091-1.636 0-3.093-.803-3.858-2.091C4.907 7.078 6.364 6.275 8 6.275ZM8 5.02c-2.427 0-4.498 1.388-5.333 3.346.835 1.958 2.906 3.346 5.333 3.346s4.498-1.388 5.333-3.346C12.498 6.408 10.427 5.02 8 5.02Zm0 4.6c-.738 0-1.333-.56-1.333-1.254S7.262 7.111 8 7.111s1.333.56 1.333 1.255c0 .694-.595 1.255-1.333 1.255Z'
          />
        </>
      );
    case 'whats-new-icon':
      return (
        <>
          <path
            fill='#7DDAA0'
            d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.717 11.184 1.326 10.12l.381-.857.882.393A5.67 5.67 0 0 1 4 4a5.606 5.606 0 0 1 3.244-1.606 5.698 5.698 0 0 1 3.488.65l-.453.821a4.755 4.755 0 0 0-2.91-.542 4.676 4.676 0 0 0-2.705 1.34A4.73 4.73 0 0 0 3.489 9.39l.436-.979.856.381-1.064 2.391Zm9.694-4.84A5.67 5.67 0 0 1 12 12a5.606 5.606 0 0 1-3.992 1.656c-.955 0-1.906-.24-2.74-.7l.453-.821c.877.484 1.91.676 2.91.542a4.676 4.676 0 0 0 2.705-1.34 4.73 4.73 0 0 0 1.174-4.728l-.436.979-.856-.381 1.064-2.391 2.391 1.064-.381.857-.882-.393Z'
          />
        </>
      );
    case 'security-icon':
      return (
        <>
          <mask id='a' width={16} height={16} x={0} y={0} maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M16 0H0v16h16V0Z' />
          </mask>
          <g mask='url(#a)'>
            <path
              fill='#7DDAA0'
              d='M14.95 2.24a.523.523 0 0 0-.377-.432L8.143.019a.523.523 0 0 0-.281 0l-6.43 1.789a.523.523 0 0 0-.378.431c-.038.268-.889 6.605 1.294 9.758 2.18 3.149 5.396 3.956 5.531 3.988a.52.52 0 0 0 .246 0c.136-.032 3.352-.84 5.531-3.988 2.183-3.152 1.332-9.49 1.295-9.758Zm-2.8 3.699-4.387 4.386a.521.521 0 0 1-.74 0L4.311 7.613a.523.523 0 0 1 0-.74l.539-.538a.523.523 0 0 1 .74 0L7.392 8.14l3.478-3.478a.523.523 0 0 1 .74 0l.538.538a.523.523 0 0 1 0 .74Z'
            />
          </g>
        </>
      );
    case 'brand-icon':
      return (
        <>
          <path
            fill='#7DDAA0'
            d='M8 .001a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2.392a2.646 2.646 0 1 1 0 5.292 2.646 2.646 0 0 1 0-5.292Zm-.002 11.516a5.871 5.871 0 0 1-3.823-1.41 1.128 1.128 0 0 1-.396-.857c0-1.482 1.2-2.668 2.682-2.668H9.54a2.665 2.665 0 0 1 2.677 2.668c0 .33-.144.643-.395.857a5.87 5.87 0 0 1-3.824 1.41Z'
          />
        </>
      );
    case 'jobs-icon':
      return (
        <>
          <path
            fill='#7DDAA0'
            d='M10.5 3.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1V4H4v-.5A2.5 2.5 0 0 1 6.5 1h3A2.5 2.5 0 0 1 12 3.5V4h2.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-8C0 4.67.67 4 1.5 4h9v-.5Z'
          />
        </>
      );
    case 'system-status-icon':
      return (
        <>
          <path
            fill='#7DDAA0'
            d='M8.51 6.268a2.243 2.243 0 1 0-.44 4.464 2.243 2.243 0 0 0 .44-4.464ZM13.911 8.5a5.4 5.4 0 0 1-.054.729l1.585 1.242a.379.379 0 0 1 .086.482l-1.5 2.594a.379.379 0 0 1-.46.16l-1.573-.633a.565.565 0 0 0-.532.061c-.24.166-.492.313-.755.44A.558.558 0 0 0 10.4 14l-.236 1.679A.387.387 0 0 1 9.79 16H6.79a.39.39 0 0 1-.375-.31l-.235-1.677a.563.563 0 0 0-.315-.428 5.444 5.444 0 0 1-.753-.44.562.562 0 0 0-.53-.06l-1.572.633a.38.38 0 0 1-.46-.16l-1.5-2.594a.379.379 0 0 1 .086-.482l1.34-1.052a.563.563 0 0 0 .21-.493 4.778 4.778 0 0 1 0-.87.56.56 0 0 0-.213-.49l-1.339-1.05a.379.379 0 0 1-.083-.48l1.5-2.594a.379.379 0 0 1 .46-.16l1.573.633a.565.565 0 0 0 .532-.061c.24-.166.492-.313.755-.44A.559.559 0 0 0 6.18 3l.236-1.679A.388.388 0 0 1 6.79 1H9.79a.39.39 0 0 1 .375.31l.235 1.677a.562.562 0 0 0 .316.428c.262.127.513.274.752.44a.561.561 0 0 0 .53.06l1.572-.633a.38.38 0 0 1 .46.16l1.5 2.594a.379.379 0 0 1-.086.482l-1.34 1.052a.562.562 0 0 0-.211.493c.011.145.019.29.019.437Z'
          />
        </>
      );
    case 'experts-program-icon':
      return (
        <>
          <path
            fill='#7DDAA0'
            d='M3.21 3.605A3.18 3.18 0 0 1 6.388.428a3.18 3.18 0 0 1 3.177 3.177 3.18 3.18 0 0 1-3.177 3.177 3.18 3.18 0 0 1-3.176-3.177Zm5.632 9.784a1.51 1.51 0 0 1-.405-1.572 1.526 1.526 0 0 1 1.255-1.056l.993-.143s.159-.016.206-.112l.318-.635s.04-.063.032-.15a.251.251 0 0 0-.064-.12c-.69-.738-1.731-1.23-3.208-1.23H4.792c-3.225 0-4.368 2.358-4.368 4.383 0 1.81.96 2.764 2.78 2.764H9.23c.127 0 .208-.096.247-.302l.158-.913a.221.221 0 0 0-.071-.215l-.723-.699Zm6.963-.858c.21-.2.094-.55-.195-.592l-1.582-.225a.353.353 0 0 1-.267-.19l-.685-1.359a.382.382 0 0 0-.679 0l-.685 1.36a.354.354 0 0 1-.266.19l-1.582.224a.345.345 0 0 0-.196.592l1.144 1.091c.083.08.121.195.102.307l-.262 1.493c-.053.303.272.535.55.392l1.371-.705a.359.359 0 0 1 .33 0l1.371.706c.278.143.602-.088.55-.392l-.263-1.494a.342.342 0 0 1 .102-.307l1.142-1.091Z'
          />
        </>
      );
    case 'affiliate-program-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              fill='#7DDAA0'
              d='M13.825 11.707a2.111 2.111 0 0 0-1.07.302l-1.027-1.033a4.766 4.766 0 0 0-.005-5.947l1.032-1.038a2.147 2.147 0 1 0-.746-.746L10.97 4.277a4.752 4.752 0 0 0-5.942 0L3.991 3.245a2.147 2.147 0 1 0-.746.746L4.277 5.03a4.766 4.766 0 0 0-.005 5.947l-1.027 1.033a2.146 2.146 0 1 0 .746.746l1.033-1.032c.01.01.021.015.032.026a4.77 4.77 0 0 0 5.888 0c.01-.01.021-.016.032-.026l1.033 1.032a2.11 2.11 0 1 0 1.816-1.048ZM10.87 10.35a3.17 3.17 0 0 0-1.303-1.398.11.11 0 0 1-.031-.021 2.118 2.118 0 1 0-3.072 0 .11.11 0 0 1-.031.021 3.17 3.17 0 0 0-1.303 1.398 3.706 3.706 0 1 1 5.74 0Z'
            />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h16v16H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'left-arrow-icon':
      return (
        <>
          <path
            stroke='#A5ABA9'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8.266 1.828 2.094 8m0 0 6.172 6.172M2.094 7.999H14'
          />
        </>
      );
    case 'right-arrow-icon':
      return (
        <>
          <path
            stroke='#A5ABA9'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M7.734 1.828 13.906 8m0 0-6.172 6.172m6.172-6.172H2'
          />
        </>
      );
    case 'arrow':
      return (
        <>
          <path
            stroke='#131313'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.857}
            fill='none'
            d='m2 3 4 4-4 4'
          />
        </>
      );
    case 'green-star-icon':
      return (
        <>
          <path
            fill='#09AA6C'
            fillRule='evenodd'
            stroke='#09AA6C'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={0.875}
            d='M6.999 2.19 8.71 5.685l3.83.565L9.77 8.97l.653 3.84L7 10.997l-3.425 1.815.654-3.842-2.771-2.72 3.829-.564L6.999 2.19Z'
            clipRule='evenodd'
          />
        </>
      );
    case 'bullet-point-icon':
      return (
        <>
          <circle cx={8.328} cy={8.5} r={2} fill='#A5ABA9' />
        </>
      );
    case 'information-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              stroke='#131313'
              strokeMiterlimit={10}
              strokeWidth={1.091}
              fill='none'
              d='M6.002 1.065a5.436 5.436 0 1 0 0 10.871 5.436 5.436 0 0 0 0-10.871Z'
            />
            <path
              stroke='#131313'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.091}
              fill='none'
              d='M4.906 5.408h.97v3.518'
            />
            <path
              stroke='#131313'
              strokeLinecap='round'
              strokeMiterlimit={10}
              strokeWidth={1.091}
              fill='none'
              d='M4.543 9.048h2.67'
            />
            <path fill='#131313' d='M5.757 2.678a.789.789 0 1 0 0 1.577.789.789 0 0 0 0-1.577Z' />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 .5h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'informative-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              stroke='#4C4C4C'
              strokeMiterlimit={10}
              strokeWidth={1.091}
              fill='none'
              d='M6.002 1.065a5.436 5.436 0 1 0 0 10.871 5.436 5.436 0 0 0 0-10.871Z'
            />
            <path
              stroke='#4C4C4C'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.091}
              fill='none'
              d='M4.906 5.408h.97v3.518'
            />
            <path
              stroke='#4C4C4C'
              strokeLinecap='round'
              strokeMiterlimit={10}
              strokeWidth={1.091}
              fill='none'
              d='M4.543 9.048h2.67'
            />
            <path fill='#4C4C4C' d='M5.757 2.678a.789.789 0 1 0 0 1.577.789.789 0 0 0 0-1.577Z' />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 .5h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'green-star-big-icon':
      return (
        <>
          <path
            fill='#09AA6C'
            fillRule='evenodd'
            stroke='#09AA6C'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m12 3.396 2.935 5.993 6.565.968-4.75 4.662 1.121 6.586L12 18.494l-5.871 3.11L7.25 15.02 2.5 10.357l6.564-.968L12 3.396Z'
            clipRule='evenodd'
          />
        </>
      );
    case 'white-star-big-icon':
      return (
        <>
          <path
            fill='#fff'
            stroke='#A5ABA9'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m12 3.396 2.935 5.993 6.565.968-4.75 4.662 1.121 6.586L12 18.494l-5.871 3.11L7.25 15.02 2.5 10.357l6.564-.968L12 3.396Z'
            clipRule='evenodd'
          />
        </>
      );
    case 'green-star-medium-icon':
      return (
        <>
          <path
            fill='#09AA6C'
            fillRule='evenodd'
            stroke='#09AA6C'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.25}
            d='m9.999 2.414 2.445 4.994 5.471.806-3.958 3.885.934 5.488L10 14.995l-4.893 2.592.934-5.488-3.958-3.885 5.47-.806 2.447-4.994Z'
            clipRule='evenodd'
          />
        </>
      );
    case 'white-star-medium-icon':
      return (
        <>
          <path
            stroke='#A5ABA9'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            fill='none'
            d='m9.999 2.414 2.445 4.994 5.471.806-3.958 3.885.934 5.488L10 14.995l-4.893 2.592.934-5.488-3.958-3.885 5.47-.806 2.447-4.994Z'
            clipRule='evenodd'
          />
        </>
      );
    case 'half-star-big-icon':
      return (
        <>
          <path
            fill='#fff'
            stroke='#A5ABA9'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m12.5 3 2.935 5.993L22 9.96l-4.75 4.662 1.121 6.586-5.871-3.111-5.871 3.111 1.121-6.586L3 9.96l6.564-.967L12.5 3Z'
            clipRule='evenodd'
          />
          <path
            fill='#09AA6C'
            stroke='#09AA6C'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m6.629 21.208 5.871-3.111V3L9.564 8.993 3 9.96l4.75 4.662-1.121 6.586Z'
          />
        </>
      );
    case 'close-icon':
      return (
        <>
          <path
            stroke='#757575'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.182}
            d='m17.136 8.864-8.273 8.272m8.273 0L8.863 8.864l8.273 8.272Z'
          />
        </>
      );
    case 'slider-close-icon':
      return (
        <>
          <path
            stroke='#A5ABA9'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2.545}
            d='M36.908 19.09 19.09 36.91m17.818 0L19.09 19.091l17.818 17.818Z'
          />
        </>
      );
    case 'animated-link-icon':
      return (
        <>
          <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
            <path
              d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
              stroke-width='1.92854'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='HoverArrow__tipPath'
            />
            <path
              d='M10.33 5.99951H1.5'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='HoverArrow__linePath'
            />
          </svg>
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
