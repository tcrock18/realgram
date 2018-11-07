import { Dimensions } from 'react-native'

export default {
    images: {
        heartIcon: require('../../assets/like.png'),
        chatIcon: require('../../assets/chat.png'),
        arrowIcon: require('../../assets/share.png'),
    },
    styleConstants: {
        rowHeight: 50,
        oneThirdWidth: (Dimensions.get('window').width) / 3
    },
    // baseUrl: 'https://realgram-api-gkexcm.turbo360-vertex.com/api/'
    baseUrl: 'http://localhost:3000/api/'
}
