export type DropdownMenuType = {
    dropdownItems: {
        items: {
            button: string;
            links: {
                url: string;
                title: string;
            }[];
        }[];
    };
};

export type MenuType = {
    items: {
        links: {
            url: string;
            title: string;
        }[];
    };
};