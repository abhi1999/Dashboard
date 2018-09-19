import * as  React from 'react';
import { List } from 'antd';
import { ILoggedNotification } from '../../constants/ILoggedNotification';

class LocalErrorLogView extends React.Component {
    
    constructor(props:any) {
        super(props);
        this.state = {
        };
    }

    public render() {
        // Grab the log from the window global variable
        const data: ILoggedNotification[] = ((window as any).notificationLog);
        if (data === undefined) {
            return 'Nothing logged.';
        }

        return (
            <div style={{paddingLeft:2}}>
                <List dataSource={data}
                    renderItem={ item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={item.when + ' ' + item.title}
                                description={item.message}
                                />
                        </List.Item>
                )}
                />
            </div>
        )
    }
}

export default LocalErrorLogView;