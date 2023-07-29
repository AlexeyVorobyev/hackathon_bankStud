import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const MySlider = ({settings,callback}) => {
    return (
        <Box sx={{ width: settings.width}}>
            <Slider
                aria-label="Custom marks"
                defaultValue={settings.defaultVal}
                step={settings.step}
                valueLabelDisplay="auto"
                marks={settings.marks}
                min={settings.min}
                max={settings.max}
                size="small"
                onChange={callback}
            />
        </Box>
    );
}

export {MySlider};