import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

function LegislacionFileItem(props) {
  const file = props.file;
  return (
    <li>
      <span>{file.name}</span>
      <a
        href={file.url}
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-success'
      >
        Descargar{' '}
        <FontAwesomeIcon icon={faFileDownload} size='lg' className='ml-1' />
      </a>
    </li>
  );
}

export default LegislacionFileItem;
