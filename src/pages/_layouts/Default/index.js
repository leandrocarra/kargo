import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Search from '~/components/Search';
import LateralMenu from '~/components/LateralMenu';
// import Footer from  // const handleBtnCollapse = () => {
  //   collapseInDesktop
  //     ? handleCollapse('openDesktop')
  //     : handleCollapse('closeDesktop')
  // } '~/components/Footer';

import { WrapperLeft, WrapperRight, ContentArea } from './styles';

import { useCollapseDesktop } from '~/hooks/useCollapseMenus'

const useStyles = makeStyles({
  left: {
    transition: 'width .155s ease-in-out',
  },
  right: {
    transition: 'width .155s ease-in-out',
  },
  controlFlowClose: {
    '& $left': {
      width: '0%',
    },
    '& $right': {
      width: '100%',
    }
  },
  controlFlowOpen: {
    '& $left': {
      width: '260px',
    },
    '& $right': {
       width: 'calc(100% - 260px)',
    }
  },
});

function LayoutDefault({ children }) {
  const classes = useStyles();
  const { collapseInDesktop } = useCollapseDesktop();

  return (
    <section className={
      collapseInDesktop
        ? `${classes.controlFlowClose}`
        : `${classes.controlFlowOpen}`
      }>
      <WrapperLeft className={classes.left}>
        <LateralMenu />
      </WrapperLeft>
      <WrapperRight className={classes.right}>
        <Search />
        <ContentArea>
          {children}
        </ContentArea>
        {/* <Footer /> */}
      </WrapperRight>
    </section>
  );
}

export default LayoutDefault;