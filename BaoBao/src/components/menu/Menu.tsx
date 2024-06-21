import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import { menu, MenuItem, ListItem } from '../../data';

interface DropdownState {
    [key: number]: boolean;
}

const Menu: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({});

    const toggleDropdown = (id: number) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="menu">
            {menu.map((item: MenuItem) => (
                <div className="item" key={item.id}>
                    <span className="title" onClick={() => toggleDropdown(item.id)}>
                        {item.title}
                    </span>
                    <div className={`dropdown ${dropdownOpen[item.id] ? 'open' : ''}`}>
                        {item.listItems.map((listItem: ListItem) => (
                            <Link to={listItem.url} className="listItem" key={listItem.id}>
                                <img src={listItem.icon} alt="" />
                                <span className="listItemTitle">{listItem.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;
