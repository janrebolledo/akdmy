import React from 'react';

export default function IconClose({ onClick }) {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className='cursor-pointer'
    >
      <path
        d='M20.3717 7.86648L17.4617 4.95648L12.3717 10.0465L7.2817 4.95648L4.3717 7.86648L9.4617 12.9565L4.3717 18.0465L7.2817 20.9565L12.3717 15.8665L17.4617 20.9565L20.3717 18.0465L15.2817 12.9565L20.3717 7.86648Z'
        fill='currentColor'
      />
    </svg>
  );
}
