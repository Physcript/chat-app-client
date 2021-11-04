
import { useState } from 'react'
import { Image,Icon } from 'semantic-ui-react'

function Headers ({ user }) {

    const [ person,setPerson ] = useState(user)

    return (
        <div className = 'display-flex-space-between'>
            <div className = 'display-flex-row flex-center gap-2'>
                <div>
                    <Image src = { person.image } size = 'mini' wrapped/>
                </div>
                <div>
                    <label>{ person.displayName }</label>
                </div>
            </div>
            <div className = 'display-flex-row flex-center' >
                <div>
                    <Icon name = 'bars'  />
                </div>
            </div>

        </div>
    )
}

export default Headers
