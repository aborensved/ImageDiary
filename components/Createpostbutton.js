import {view, Pressable, Text} from 'react-native';

const CreatePostButton = ({title, icon, navigation}) => {
    return (
    <Pressable
        onPress={() => navigation.navigate('Create post')}
        style={styles.createbutton}
    >
        <Text>{title}</Text>
            {icon}                 
        </Pressable>
    )
}

export default CreatePostButton;