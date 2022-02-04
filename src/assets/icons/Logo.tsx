interface LogoProps {
  size?: number;
  translucent?: boolean;
}

export default function Logo(props: LogoProps) {
  return props.translucent ? (
    <svg
      width={props.size ? props.size : '100'}
      height={props.size ? props.size : '100'}
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='5'
        width='90'
        height='90'
        rx='8'
        fill='black'
        fillOpacity='0.5'
      />
      <g filter='url(#filter0_d_6_2)'>
        <rect
          x='12.2'
          y='12.2'
          width='22.5'
          height='75.6'
          rx='5'
          fill='#F0F7FA'
        />
        <rect
          x='38.75'
          y='12.2'
          width='22.5'
          height='58.5'
          rx='5'
          fill='#F0F7FA'
        />
        <rect
          x='65.3'
          y='12.2'
          width='22.5'
          height='41.4'
          rx='5'
          fill='#F0F7FA'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_6_2'
          x='10.2'
          y='12.2'
          width='79.6'
          height='79.6'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='2' />
          <feGaussianBlur stdDeviation='1' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_6_2'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_6_2'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  ) : (
    <svg
      width={props.size ? props.size : '100'}
      height={props.size ? props.size : '100'}
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='5'
        width='90'
        height='90'
        rx='8'
        fill='url(#paint0_linear_2_11)'
      />
      <g filter='url(#filter0_d_2_11)'>
        <rect
          x='12.2'
          y='12.2'
          width='22.5'
          height='75.6'
          rx='5'
          fill='#F0F7FA'
        />
        <rect
          x='38.75'
          y='12.2'
          width='22.5'
          height='58.5'
          rx='5'
          fill='#F0F7FA'
        />
        <rect
          x='65.3'
          y='12.2'
          width='22.5'
          height='41.4'
          rx='5'
          fill='#F0F7FA'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_2_11'
          x='10.2'
          y='12.2'
          width='79.6'
          height='79.6'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='2' />
          <feGaussianBlur stdDeviation='1' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_2_11'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_2_11'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_2_11'
          x1='50'
          y1='5'
          x2='50'
          y2='95'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#0A95BF' />
          <stop offset='1' stop-color='#32A0C2' />
        </linearGradient>
      </defs>
    </svg>
  );
}
