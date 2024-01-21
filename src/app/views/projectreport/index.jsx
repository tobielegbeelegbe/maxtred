import {
  Box,
  Button,
  Card,
  Drawer,
  Grid,
  IconButton,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FlexBox } from 'app/components/FlexBox';
import Apps from 'app/components/icons/Apps';
import DeleteOutlined from 'app/components/icons/DeleteOutlined';
import DevicesApple from 'app/components/icons/DevicesApple';
import DollarOutlined from 'app/components/icons/DollarOutlined';
import FileOutlined from 'app/components/icons/FileOutlined';
import Fingerprint from 'app/components/icons/Fingerprint';
import Instagram from 'app/components/icons/Instagram';
import Key from 'app/components/icons/Key';
import Link from 'app/components/icons/Link';
import LockOutlined from 'app/components/icons/LockOutlined';
import NotificationOutlined from 'app/components/icons/NotificationOutlined';
import PremiumOutlined from 'app/components/icons/PremiumOutlined';
import SettingsOutlined from 'app/components/icons/SettingsOutlined';
import UserOutlined from 'app/components/icons/UserOutlined';
import { H5 } from 'app/components/Typography';
import { Fragment, useState } from 'react';
import ApiKeys from './ApiKeys';
import BasicInformation from './BasicInformation';
import Billing from './Billing';
import ConnectedAccounts from './ConnectedAccounts';
import DeleteAccount from './DeleteAccount';
import Notifications from './Notifications';
import Password from './Password';
import Preferences from './Preferences';
import RecentDevices from './RecentDevices';
import Referrals from './Referrals';
import SocialAccounts from './SocialAccounts';
import Statements from './Statements';
import TwoStepVerification from './TwoStepVerification';
import { Breadcrumb } from "app/components";

// styled component
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  overflow: 'hidden',
  position: 'relative',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  padding: '0.6rem 1.5rem',
  justifyContent: 'flex-start',
  color: theme.palette.text.primary,
}));

const ProjectReport = () => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [active, setActive] = useState('Basic Information');
  const downMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const style = {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[100],
    '&::before': {
      left: 0,
      width: 4,
      content: '""',
      height: '100%',
      position: 'absolute',
      transition: 'all 0.3s',
      backgroundColor: theme.palette.primary.main,
    },
  };

  function TabListContent() {
    return (
      <FlexBox flexDirection="column">
        {tabList.map(({ id, name, Icon }) => (
          <StyledButton
            key={id}
            startIcon={<Icon sx={{ color: 'text.disabled' }} />}
            sx={active === name ? style : { '&:hover': style }}
            onClick={() => {
              setActive(name);
              setOpenDrawer(false);
            }}
          >
            {name}
          </StyledButton>
        ))}
      </FlexBox>
    );
  }

  return (
    <Box p={4}>

<div className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Dashoard", path: "/pages" }, { name: "Project Reports" }]} />
      </div>
      <Grid container spacing={3} p={1}>
        <Grid item md={3} xs={12}>
          {downMd ? (
            <Fragment>
              <FlexBox alignItems="center" gap={1}>
                <IconButton sx={{ padding: 0 }} onClick={() => setOpenDrawer(true)}>
                  <Apps sx={{ color: 'primary.main' }} />
                </IconButton>

                <H5>Show More</H5>
              </FlexBox>

              <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box padding={1}>
                  <TabListContent />
                </Box>
              </Drawer>
            </Fragment>
          ) : (
            <Card sx={{ padding: '1rem 0' }}>
              <TabListContent />
            </Card>
          )}
        </Grid>

        <Grid item md={9} xs={12}>
          {active === tabList[0].name && <BasicInformation />}
          {active === tabList[1].name && <Password />}
          {active === tabList[2].name && <Preferences />}
          {active === tabList[3].name && <RecentDevices />}
          {active === tabList[4].name && <Notifications />}
          {active === tabList[5].name && <TwoStepVerification />}
          {active === tabList[6].name && <ConnectedAccounts />}
          {active === tabList[7].name && <SocialAccounts />}
          {active === tabList[8].name && <Billing />}
          
        </Grid>
      </Grid>
    </Box>
  );
};

const tabList = [
  { id: 1, name: '(2023-2024) Report', Icon: UserOutlined },
  { id: 2, name: '(2022-2023) Report', Icon: UserOutlined },
  { id: 3, name: '(2021-2022) Report', Icon: UserOutlined },
  { id: 4, name: '(2020-2021) Report', Icon: UserOutlined },
  { id: 5, name: '(2019-2024) Report', Icon: UserOutlined },
  { id: 6, name: '(2018-2024) Report', Icon: UserOutlined },
  { id: 7, name: '(2017-2024) Report', Icon: UserOutlined },
  { id: 8, name: '(2016-2024) Report', Icon: UserOutlined },
  { id: 9, name: '(2015-2024) Report', Icon: UserOutlined },
];

export default ProjectReport;
