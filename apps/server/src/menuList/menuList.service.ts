import { Injectable } from "@nestjs/common";

const menuList: {
  id: string;
  name: string;
}[] = [];

@Injectable()
export class MenuListService {
  findAll() {
    return menuList;
  }
  create(menu: { id: string; name: string }) {
    menuList.push(menu);
    return menu;
  }
  update(menu: { id: string; name: string }) {
    const index = menuList.findIndex((m) => m.id === menu.id);
    if (index !== -1) {
      menuList[index] = menu;
    }
    return menu;
  }
  delete(id: string) {
    const index = menuList.findIndex((m) => m.id === id);
    if (index !== -1) {
      menuList.splice(index, 1);
    }
    return id;
  }
}
