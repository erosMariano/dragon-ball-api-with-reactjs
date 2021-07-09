import React, {useState} from 'react'
import Header from './Header';
import LeftBarApp from './LeftBarApp';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
  
  

function LeftBar() {

    const useStyles = makeStyles({
        list: {
          width: 250,
        },
        fullList: {
          width: 'auto',
        },
      });
      
    
        const classes = useStyles();
        const [state, setState] = React.useState({
          top: false,
          left: false,
          bottom: false,
          right: false,
        })
    
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [anchor]: open });
        };
    
    const headerRender = (anchor) => (
        <div
            className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {<LeftBarApp/>}
        </div>
        );
    
    
    
    
    
    
    
        const [tamanhoTela , setTamanhoTela] = useState("");
    
        function sizeOfThings(){
            var windowWidth = window.innerWidth;
            return windowWidth
        };
          
          sizeOfThings();
          
          window.addEventListener('resize', function(){ 
              sizeOfThings()
    
              setTamanhoTela(sizeOfThings);
        })












    return (
        <div>

        {sizeOfThings() <= 700 ? 
            <>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                    >
                    {headerRender(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
            </> : <LeftBarApp/>}

                
        </div>
    )
}

export default LeftBar
