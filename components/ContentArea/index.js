import Styles from '../../styles/Componentes/ContentArea/ContentArea.module.scss';
import Button from '../../styles/braga/_buttons.module.scss';

import Search from '../Search';
import BoxContent from '../BoxContent';
import Footer from '../Footer';
// import { DestinyForm, DataProduct }  from '../Forms/index';
import { DestinyForm, DataProduct } from '../Forms/index';




const ContentArea = () => {
  
  return (
    <>
      <div className={Styles.contentArea__top}>
        <Search />
      </div>
      <div className={Styles.contentArea__content}>
        <BoxContent title="Destinatário">
          <DestinyForm />
        </BoxContent>
        {/* <BoxContent title="dados da mercadoria">
          <DataProduct/>
        </BoxContent> */}
        <Footer />
      </div>
    </>
  );
}

export default ContentArea;