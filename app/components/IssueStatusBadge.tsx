import { Badge, Flex } from '@radix-ui/themes'
import React from 'react'
import { Status } from '@prisma/client';

const statusMap: Record<Status, {label:string, color:'red' | 'violet' | 'green'}> = {
    OPEN : {label: 'Open', color: 'red'},
    IN_PROGRESS : {label: 'In progress', color: 'violet'},
    CLOSED : {label: 'Closed', color: 'green'},
}

const IssueStatusBadge = ({status}: {status: Status}) => {
    return (
        <Badge color = {statusMap[status].color}>
            {statusMap[status].label}
        </Badge>

    )
}

export default IssueStatusBadge

{/* <div>
<Flex gap="2">
<Badge color="orange">In progress</Badge>
<Badge color="blue">In review</Badge>
<Badge color="green">Complete</Badge>
</Flex>
</div> */}