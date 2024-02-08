import { ActivityIndicator, View } from 'react-native'
import { slate } from 'tailwindcss/colors'

export const Loading: React.FC = () => {
  return (
    <View className='flex-1 items-center justify-center bg-black'>
      <ActivityIndicator
        color={slate[50]}
        size={64}
      />
    </View>
  )
}
