import React from 'react'

interface HomeProps {
  avatar?: string
  name?: string
  description?: string
}

const HomeRoute: React.SFC<HomeProps> = ({ avatar, name, description }) => {
  return (
    <div>
      <div className="card-profile--container">
        <div className="card card-profile">
          <div className="profile-avatar background--main">
            <img alt="me" className="profile-avatar--img" src={avatar} />
          </div>
          <div className="profile-name">{name}</div>
          <div className="profile-desc">{description}</div>
        </div>
      </div>
    </div>
  )
}

HomeRoute.defaultProps = {
  avatar:
    'https://media.licdn.com/dms/image/C5603AQHD1fF5r8FSxQ/profile-displayphoto-shrink_200_200/0?e=1544659200&v=beta&t=JaNeMx7VxRAB5DYhxs---brcpvufe0FkM-78JQ3g8j8',
  name: 'Ti Teller',
  description: 'The man who falling love Javascript.'
}

export default HomeRoute
