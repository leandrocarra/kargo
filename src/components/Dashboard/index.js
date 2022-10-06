import React from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';

import { SmallBoxContent } from '~/components/BoxContent';
import { IconSelled, ContentSelled } from './styles'
// import TotalOrder from './totalOrder'
// import QuantitySelled from './quantitySelled'

function Dashboard() {
  return (
    <>
      <SmallBoxContent>
        <IconSelled>
          <TrendingUpIcon />
        </IconSelled>
        <ContentSelled>
          <strong>TOTAL DE VENDAS</strong>
          <span>R$123.000,23</span>
        </ContentSelled>
      </SmallBoxContent>

      <SmallBoxContent>
        <IconSelled>
          <DynamicFeedIcon />
        </IconSelled>
        <ContentSelled>
          <strong>QUANTIDADE DE VENDAS</strong>
          <span>3</span>
        </ContentSelled>
      </SmallBoxContent>

      <SmallBoxContent>
        <IconSelled>
          <TrendingUpIcon />
        </IconSelled>
        <ContentSelled>
          <strong>TOTAL DE VENDAS</strong>
          <span>R$123.000,23</span>
        </ContentSelled>
      </SmallBoxContent>

      <SmallBoxContent>
        <IconSelled>
          <TrendingUpIcon />
        </IconSelled>
        <ContentSelled>
          <strong>TOTAL DE VENDAS</strong>
          <span>R$123.000,23</span>
        </ContentSelled>
      </SmallBoxContent>

      <SmallBoxContent>
        <IconSelled>
          <TrendingUpIcon />
        </IconSelled>
        <ContentSelled>
          <strong>TOTAL DE VENDAS</strong>
          <span>R$123.000,23</span>
        </ContentSelled>
      </SmallBoxContent>

      <SmallBoxContent>
        <IconSelled>
          <TrendingUpIcon />
        </IconSelled>
        <ContentSelled>
          <strong>TOTAL DE VENDAS</strong>
          <span>R$123.000,23</span>
        </ContentSelled>
      </SmallBoxContent>

      <SmallBoxContent>
        <IconSelled>
          <TrendingUpIcon />
        </IconSelled>
        <ContentSelled>
          <strong>TOTAL DE VENDAS</strong>
          <span>R$123.000,23</span>
        </ContentSelled>
      </SmallBoxContent>

      <SmallBoxContent>
        <IconSelled>
          <TrendingUpIcon />
        </IconSelled>
        <ContentSelled>
          <strong>TOTAL DE VENDAS</strong>
          <span>R$123.000,23</span>
        </ContentSelled>
      </SmallBoxContent>
    </>
  )
}

export default Dashboard;