import {view, Pressable, Text} from 'react-native';

const CreatePostButton = ({title, icon}) => {
    return (<Pressable style={styles.createbutton}>
        <Text>{title}</Text>
            {icon}                 
        </Pressable>
    )
}

export default CreatePostButton;