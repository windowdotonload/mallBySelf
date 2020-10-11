

const STORAGE_KEY = 'mall'

export default {
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name, val)
        } else {
            let val = this.getStorage()
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, val)
        }
    },
    // 获取某一个模块下面的属性user下面的userName
    //module_name是指存储的一个对象的键值
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getStorage(module_name)
            if (val) return val[key]
        }
        return this.getStorage()[key]
    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    clear(key, module_name) {
        let val = this.getStorage()
        if (module_name) {
            if (!module_name) return
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        this.setItem(STORAGE_KEY, val)
    }
}