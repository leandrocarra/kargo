import Image from 'next/image';

import Styles from '../../styles/Componentes/LateralMenu//Top.module.scss'
import MenuCollaps from '@material-ui/icons/MenuOpen';

function Top() {
  return (
    <div className={Styles.top__wrapper}>
      <div className={Styles.top__icon}>
        <MenuCollaps />
      </div>
      <div className={Styles.top__mark}>
        <Image
          src="/marks/ondisc.png"
          alt="me"
          width="150"
          height="43" 
          quality={80}
        />
      </div>
    </div>
  );
}

export default Top;