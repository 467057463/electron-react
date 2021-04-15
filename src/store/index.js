import { set } from 'mobx';
import { types, getSnapshot } from 'mobx-state-tree';

const RootStore = types
  .model({
    title: 'ssssbbbbb',
  })
  .actions((self) => ({
    setTitle(val) {
      self.title = val;
    },
  }));

export const store = RootStore.create();
console.log(store.setTitle('abcdef'));
