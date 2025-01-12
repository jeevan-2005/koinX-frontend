'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Performance from '../Components/Performance';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type Props = {};

const TabsNavigation = (props: Props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '20px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs'>
          <Tab
            label='Overview'
            style={{
              fontWeight: 600,
              textTransform: 'capitalize',
              fontSize: '16px',
            }}
            {...a11yProps(0)}
          />
          <Tab
            label='Fundamentals'
            style={{
              fontWeight: 600,
              textTransform: 'capitalize',
              fontSize: '16px',
            }}
            {...a11yProps(1)}
          />
          <Tab
            label='News Insights'
            style={{
              fontWeight: 600,
              textTransform: 'capitalize',
              fontSize: '16px',
            }}
            {...a11yProps(2)}
          />
          <Tab
            label='Sentiments'
            style={{
              fontWeight: 600,
              textTransform: 'capitalize',
              fontSize: '16px',
            }}
            {...a11yProps(3)}
          />
          <Tab
            label='Team'
            style={{
              fontWeight: 600,
              textTransform: 'capitalize',
              fontSize: '16px',
            }}
            {...a11yProps(4)}
          />
          <Tab
            label='Technicals'
            style={{
              fontWeight: 600,
              textTransform: 'capitalize',
              fontSize: '16px',
            }}
            {...a11yProps(5)}
          />
          <Tab
            label='Tokenomics'
            style={{
              fontWeight: 600,
              textTransform: 'capitalize',
              fontSize: '16px',
            }}
            {...a11yProps(6)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Performance />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Five
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Item Six
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        Item Seven
      </CustomTabPanel>
    </Box>
  );
};

export default TabsNavigation;
