'use client'

import {FC} from 'react'
import {User} from 'next-auth'
import {DropdownMenu} from './ui/DropdownMenu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import UserAvatar from './UserAvatar'

interface UserAccountNavProps {
    user : Pick<User, 'name' | 'image' | 'email'>
}

const UserAccountNav: FC<UserAccountNavProps> = ({user}) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar
            className = 'h-8 w-8'
            user={{
              name: user.name || null,
              image: user.image || null,
            }}
          />
        </DropdownMenuTrigger>
      </DropdownMenu>
    );
}

export default UserAccountNav