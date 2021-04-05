import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

import TagToPrintContext from '~/hooks/useTags';
import BoxContent from '~/components/BoxContent';
import Header from '~/components/Tracking/Header';
import StatusBox from '~/components/Tracking/StatusBox';
import FloatableTag from '~/components/Tracking/FloatableTag';
import FilterTracking from '~/components/FilterTracking/';
import Loading from '~/components/Loading';

import { useTracking } from '~/context/useTracking';

import { ContainerTracking } from './styles';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles({
  emptyMessage: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '15px',
  }
});

function Container() {
  const {loading, allTracking } = useTracking();
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TagToPrintContext>
        {loading && (
          <Loading/>
        )}
        <BoxContent title='FILTRAR ENTREGAS'>
          <FilterTracking />
        </BoxContent>
        { allTracking
          ? (
              <BoxContent title='GUIAS DE TRANSPORTES'>
                <FloatableTag/>
                <ContainerTracking>
                  <Header/>
                  {allTracking && allTracking.map((track)=> (
                    <StatusBox
                      status={track.carrier.carrier_status.status}
                      numeroGuia={track._id}
                      refCliente='ver com calixto'
                      refExterna={track.carrier.carrier_status.internal_reference}
                      destinatario={track.name}
                      createAt={moment(track.created_at).format('L')}
                      createTime={moment(track.created_at).locale('pt').format('LT')}
                  />
                  ))}
                  {/* <StatusBox
                    status='atrasado'
                    numeroGuia='aaaaa'
                    refCliente='ENK K 1234567'
                    refExterna='1234556677'
                    destinatario='Pedro dias da silva'
                    createAt='11/12/1000'
                    atualizado='11/12/1000'
                  />
                  <StatusBox
                    status='pendente'
                    numeroGuia='bbbbb'
                    refCliente='ENK K 1234567'
                    refExterna='1234556677'
                    destinatario='Pedro dias da silva'
                    createAt='11/12/1000'
                    atualizado='11/12/1000'
                  />
                  <StatusBox
                    status='finalizado'
                    numeroGuia='12345678'
                    refCliente='ENK K 1234567'
                    refExterna='1234556677'
                    destinatario='Pedro dias da silva'
                    createAt='11/12/1000'
                    atualizado='11/12/1000'
                  />
                  <StatusBox
                    status='em_rota'
                    numeroGuia='12345678'
                    refCliente='ENK K 1234567'
                    refExterna='1234556677'
                    destinatario='Pedro dias da silva'
                    createAt='11/12/1000'
                    atualizado='11/12/1000'
                  /> */}
                
                  
                </ContainerTracking>
              </BoxContent>
            )
          : (
              <BoxContent>
                <p className={classes.emptyMessage}>Sem entregas nesse prazo</p>
              </BoxContent>
            )
        }
      </TagToPrintContext>
    </MuiPickersUtilsProvider>
  )
}

export default Container;