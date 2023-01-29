export function SvgCollection({ svgName }) {
  switch (svgName) {
    case 'books-rating-svg':
      return (
        <svg width='25' height='24' viewBox='0 0 25 24' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10.098 8.30426L12.5 2.54946L14.902 8.30426C15.0419 8.63938 15.3576 8.86723 15.7187 8.89608L21.9493 9.39383L17.2036 13.4448C16.9276 13.6804 16.8064 14.0508 16.891 14.4042L18.3415 20.4636L13.0041 17.215C12.6945 17.0266 12.3055 17.0266 11.9959 17.215L6.65848 20.4636L8.10898 14.4042C8.19359 14.0508 8.07245 13.6804 7.79644 13.4448L3.05067 9.39383L9.28134 8.89608C9.64244 8.86723 9.9581 8.63938 10.098 8.30426Z'
            stroke='#FFBC1F'
          />
        </svg>
      );
    case 'comment-rating-svg':
      return (
        <svg width='25' height='24' viewBox='0 0 25 24' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10.098 8.30426L12.5 2.54946L14.902 8.30426C15.0419 8.63938 15.3576 8.86723 15.7187 8.89608L21.9493 9.39383L17.2036 13.4448C16.9276 13.6804 16.8064 14.0508 16.891 14.4042L18.3415 20.4636L13.0041 17.215C12.6945 17.0266 12.3055 17.0266 11.9959 17.215L6.65848 20.4636L8.10898 14.4042C8.19359 14.0508 8.07245 13.6804 7.79644 13.4448L3.05067 9.39383L9.28134 8.89608C9.64244 8.86723 9.9581 8.63938 10.098 8.30426Z'
            stroke='#FFBC1F'
          />
        </svg>
      );
    case 'tile-btn-svg':
      return (
        <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path
            clipRule='evenodd'
            d='M3.52273 2.875C3.165 2.875 2.875 3.165 2.875 3.52273V8.70455C2.875 9.06228 3.165 9.35227 3.52273 9.35227H8.70455C9.06228 9.35227 9.35227 9.06228 9.35227 8.70455V3.52273C9.35227 3.165 9.06228 2.875 8.70455 2.875H3.52273ZM4.17045 8.05682V4.17045H8.05682V8.05682H4.17045ZM11.2955 2.875C10.9377 2.875 10.6477 3.165 10.6477 3.52273V8.70455C10.6477 9.06228 10.9377 9.35227 11.2955 9.35227H16.4773C16.835 9.35227 17.125 9.06228 17.125 8.70455V3.52273C17.125 3.165 16.835 2.875 16.4773 2.875H11.2955ZM11.9432 8.05682V4.17045H15.8295V8.05682H11.9432ZM2.875 11.2955C2.875 10.9377 3.165 10.6477 3.52273 10.6477H8.70455C9.06228 10.6477 9.35227 10.9377 9.35227 11.2955V16.4773C9.35227 16.835 9.06228 17.125 8.70455 17.125H3.52273C3.165 17.125 2.875 16.835 2.875 16.4773V11.2955ZM4.17045 11.9432V15.8295H8.05682V11.9432H4.17045ZM11.2955 10.6477C10.9377 10.6477 10.6477 10.9377 10.6477 11.2955V16.4773C10.6477 16.835 10.9377 17.125 11.2955 17.125H16.4773C16.835 17.125 17.125 16.835 17.125 16.4773V11.2955C17.125 10.9377 16.835 10.6477 16.4773 10.6477H11.2955ZM11.9432 15.8295V11.9432H15.8295V15.8295H11.9432Z'
          />
        </svg>
      );
    case 'list-btn-svg':
      return (
        <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.0835 10.0002C2.0835 9.56294 2.43794 9.2085 2.87516 9.2085H17.1252C17.5624 9.2085 17.9168 9.56294 17.9168 10.0002C17.9168 10.4374 17.5624 10.7918 17.1252 10.7918H2.87516C2.43794 10.7918 2.0835 10.4374 2.0835 10.0002Z'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.0835 5.25016C2.0835 4.81294 2.43794 4.4585 2.87516 4.4585H17.1252C17.5624 4.4585 17.9168 4.81294 17.9168 5.25016C17.9168 5.68739 17.5624 6.04183 17.1252 6.04183H2.87516C2.43794 6.04183 2.0835 5.68739 2.0835 5.25016Z'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.0835 14.7502C2.0835 14.3129 2.43794 13.9585 2.87516 13.9585H17.1252C17.5624 13.9585 17.9168 14.3129 17.9168 14.7502C17.9168 15.1874 17.5624 15.5418 17.1252 15.5418H2.87516C2.43794 15.5418 2.0835 15.1874 2.0835 14.7502Z'
          />
        </svg>
      );
    default:
      return <svg />;
  }
}
