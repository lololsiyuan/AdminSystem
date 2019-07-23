export const AppSite = {
    name: "AdminSystem",
    author: 'lololsiyuan',
}


export const NavHeader = [
    { name: '首页', index: "/home", icon: 'el-icon-s-home', bIsSubmenu: false },
    {
        name: '用户中心',
        // index: '2',
        index: "",
        icon: 'el-icon-s-custom',
        bIsSubmenu: true,
        subMenu: [
            { name: '用户列表', index: "/users/custom", icon: 'el-icon-s-home' },
            { name: '管理员列表', index: "/users/usermange", icon: 'el-icon-s-home' }
        ]
    },
]