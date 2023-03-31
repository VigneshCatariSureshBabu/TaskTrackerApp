import PropTypes from 'prop-types'
import Button from './button';

const Header = ({ title, onAdd, showAddTask }) => {

    return(
        <header className={'header'}>
            <h1>{title}</h1>
            <Button backgroundColor={showAddTask? '#8a0a0a': '#0e6904'} text={showAddTask? 'Close': 'Add'} onClick={onAdd}/>

            {/*<Button backgroundColor={'#88020b'} text={ 'Delete' }/>
            <Button backgroundColor={'#011947'} text={ 'Update' }/>*/}
        </header>
    )
}

Header.defaultProps= {
    title: 'Default Header Title',
}
Header.protoTypes = {
    title: PropTypes.string.isRequired,
}

/*const headingStyle = {
    color: 'blue',

}*/
export default Header