import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FaShippingFast } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalMallIcon from '@material-ui/icons/LocalMall';

import {BoxContentEmpty} from '~/components/BoxContent';
 
import {
  MicroStepContainer,
  MicroStepContent,
  MicroStepActualStatus,
  MicroStepDetail,
  MicroStepWrapperDate,
  MicroStepWrapperIcons,
  MicroStepWrapperDescriptions,
  MicroStepLine,
  MicroStepLineTrack,
  MicroStepBgIcon,
  MicroStepDateInfo,
  MicroStepDetailInfo,
  MicroStepStructure,
  MicroStepLineIcon
} from './styles';

const useStyles = makeStyles({
  reached: {
    backgroundColor: '#015EA2',
    borderColor: '#015EA2',
    borderStyle: 'solid'
  }
})

const TrackingMicroSteps = () => {
  const classes = useStyles();

  return (
    <BoxContentEmpty>
      <MicroStepContainer>
        <MicroStepContent>
          <MicroStepActualStatus>
            Criado
          </MicroStepActualStatus>
          <p>O pedido foi criado, agora está aguardando recolha</p>
        </MicroStepContent>
        <MicroStepDetail>

          {/* //left */}
          <MicroStepWrapperDate>
            <MicroStepStructure>
              <MicroStepLine>
                <MicroStepDateInfo>
                  01-02-2021 15:00
                </MicroStepDateInfo>
              </MicroStepLine>
            </MicroStepStructure>

            <MicroStepStructure>
              <MicroStepLine>
                <MicroStepDateInfo>
                  01-02-2021 15:00
                </MicroStepDateInfo>
              </MicroStepLine>
            </MicroStepStructure>

            <MicroStepStructure>
              <MicroStepLine>
                <MicroStepDateInfo>
                  01-02-2021 15:00
                </MicroStepDateInfo>
              </MicroStepLine>
            </MicroStepStructure>

            <MicroStepStructure>
              <MicroStepLine>
                <MicroStepDateInfo>
                  01-02-2021 15:00
                </MicroStepDateInfo>
              </MicroStepLine>
            </MicroStepStructure>

            <MicroStepStructure>
              <MicroStepLine>
                <MicroStepDateInfo>
                  01-02-2021 15:00
                </MicroStepDateInfo>
              </MicroStepLine>
            </MicroStepStructure>
            
          </MicroStepWrapperDate>

          {/* // Center */}
          <MicroStepWrapperIcons>

            <MicroStepStructure>
              <MicroStepLineIcon>
                {/* <MicroStepLineTrack /> */}
                <MicroStepBgIcon>
                  <LocationOnIcon style={{fontSize: '18px', color: '#FFF'}}/>
                </MicroStepBgIcon>
              </MicroStepLineIcon> 
            </MicroStepStructure> 

            <MicroStepStructure>
              <MicroStepLineIcon>
                <MicroStepLineTrack />
                <MicroStepBgIcon className={classes.reached}>
                  <FaShippingFast style={{fontSize: '18px', color: '#FFF'}}/>
                </MicroStepBgIcon>
              </MicroStepLineIcon> 
            </MicroStepStructure>

            <MicroStepStructure>
              <MicroStepLineIcon>
                <MicroStepLineTrack className={classes.reached}/>
                <MicroStepBgIcon className={classes.reached}>
                  <GoGear style={{fontSize: '18px', color: '#FFF'}}/>
                </MicroStepBgIcon>
              </MicroStepLineIcon> 
            </MicroStepStructure>

            <MicroStepStructure>
              <MicroStepLineIcon>
                <MicroStepLineTrack className={classes.reached}/>
                <MicroStepBgIcon className={classes.reached}>
                  <LocalMallIcon style={{fontSize: '18px', color: '#FFF'}}/>
                </MicroStepBgIcon>
              </MicroStepLineIcon> 
            </MicroStepStructure>

            <MicroStepStructure>
              <MicroStepLineIcon>
                <MicroStepLineTrack className={classes.reached}/>
                <MicroStepBgIcon className={classes.reached}>
                  <DescriptionIcon style={{fontSize: '18px', color: '#FFF'}}/>
                </MicroStepBgIcon>
              </MicroStepLineIcon> 
            </MicroStepStructure>
          </MicroStepWrapperIcons>

          {/* // right */}
          <MicroStepWrapperDescriptions>
            <MicroStepStructure>
              <MicroStepLine>
                <MicroStepDetailInfo>
                  <strong>
                    Maria aparecida da costa silva
                    Av Distrito Federal, São Jose apto 06 Porto, Portugal, 14440-345
                  </strong>
                </MicroStepDetailInfo>
              </MicroStepLine>
            </MicroStepStructure>

            <MicroStepStructure>
              <MicroStepLine>
                <MicroStepDetailInfo>
                  O pacote está sendo recolhido
                </MicroStepDetailInfo>
              </MicroStepLine>
            </MicroStepStructure>

            <MicroStepStructure>
              <MicroStepLine>
                <MicroStepDetailInfo>
                  O pacote está sendo recolhido
                </MicroStepDetailInfo>
              </MicroStepLine>
            </MicroStepStructure>

            <MicroStepStructure>
              <MicroStepLine>
                <MicroStepDetailInfo>
                  O pacote está sendo recolhido
                </MicroStepDetailInfo>
              </MicroStepLine>
            </MicroStepStructure>

            <MicroStepStructure>
              <MicroStepLine>
                <MicroStepDetailInfo>
                  O pacote está sendo recolhido
                </MicroStepDetailInfo>
              </MicroStepLine>
            </MicroStepStructure>
            
          </MicroStepWrapperDescriptions>

        </MicroStepDetail> 
      </MicroStepContainer>
    </BoxContentEmpty>
  );
}
 
export default TrackingMicroSteps;
