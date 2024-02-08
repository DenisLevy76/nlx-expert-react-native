import { IMAGES } from '@/utils/settings/images'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { HeaderProps } from './types'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

export const Header: React.FC<HeaderProps> = ({ title, cartQuantity = 0 }) => {
  return (
    <View className='flex-row items-center border-b border-gray-700 pb-5 mx-5'>
      <View className='flex-1'>
        <Image
          source={IMAGES.logo}
          className='h-7 w-32'
        />
        <Text className='text-white font-heading text-xl mt-2'>{title}</Text>
      </View>
      <TouchableOpacity className='flex-row relative'>
        {cartQuantity > 0 && (
          <View className='absolute z-10 -right-3 -top-3 bg-green-500 h-6 w-6 items-center justify-center rounded-full'>
            <Text>{cartQuantity}</Text>
          </View>
        )}
        <Feather
          name='shopping-bag'
          color={colors.white}
          size={32}
        />
      </TouchableOpacity>
    </View>
  )
}
