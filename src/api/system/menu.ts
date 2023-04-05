import request from '@/utils/request';


export function useMenuApi() {
    return {
        getTreeOption: (params?: object) => {
            return request({
                url: '/sys/menu/treeOption',
                method: 'get',
                params
            })
        },
        getMenuTree: (params?: object) => {
            return request({
                url: '/sys/menu/tree',
                method: 'get',
                params
            })
        }
    }
}
