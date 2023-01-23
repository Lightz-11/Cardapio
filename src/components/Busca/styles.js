import {styled} from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    margin: '2rem 0',
    height: '3rem',
    background: 'rgb(20,20,20)',
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    padding: '0 1rem',

    svg: {
        paddingTop: '.1rem'
    },

});

export const Input = styled('input', {

    outline: 'none',
    border: 'none',
    background: 'none',
    marginLeft: '1rem',
    width: '100%',
    height: '90%',
    caretColor: 'White',
    color: 'White'

});