import React from 'react';
import PropTypes from 'prop-types';
import { TreeList } from '@extjs/ext-react';

Ext.require('Ext.data.TreeStore');

export default function NavMenu({ 
    onItemClick, 
    selection,
    ...props
}) {
    return (
        <TreeList 
            {...props}
            ui="nav"
            expanderFirst={false}
            onItemClick={
                    (tree, item) => onItemClick(item.node.getId())
            }
            selection={selection}
            expanderOnly={false}
            store={{
                root: {
                    children: [
                            { id: '/', text: 'О проекте', iconCls: 'x-fa fa-home', leaf: true },
                            { id: '/', text: 'Справочники', iconCls: 'x-fa fa-wrench', 
                            children: [{
                                id: '/emp',
                                text: 'Сотрудники',
                                iconCls: 'x-fa fa-group',
                                leaf: true
                            }, {
                                id: '/gridmodal',
                                text: 'Колледжи',
                                iconCls: 'x-fa fa-wrench',
                                leaf: true
                            }, {
                                id: '/contacts',
                                text: 'Контакты',
                                iconCls: 'x-fa fa-database',
                                leaf: true
                            }]},
                            
                    ]
                }
            }}
        />        
    )
}

NavMenu.propTypes = {
    onSelectionChange: PropTypes.func,
    selection: PropTypes.string
};