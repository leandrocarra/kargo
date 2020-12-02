 import Styles from '../../styles/Componentes/BoxContent/BoxContent.module.scss';

function BoxContent({ title, children }) {
  return (
    <div className={Styles.BoxContent__box}> 
      <div className={Styles.BoxContent__title}>
        {title} 
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default BoxContent;
