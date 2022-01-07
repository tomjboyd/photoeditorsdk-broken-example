import react from 'react';
import reactDom from 'react-dom'
import PhotoEditor from './PhotoEditor';


reactDom.render(
  react.createElement(PhotoEditor, {
    container: document.getElementById('photo__editor'),
    editorInstance: () => {},
    image: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg',
    transform: {}
  }),
  document.getElementById('root')
);