import { mount } from '@vue/test-utils';
import LayoutMain from '@/components/layouts/LayoutMain';
import { LAYOUT_TYPES } from '@/components/common/constants';

describe('LayoutMain 정상 마운트', () => {
    it('메인마운트 이후 기본타입값 확인', () => {
        const wrapper = mount(LayoutMain);
        expect(wrapper.vm.type).toBe(LAYOUT_TYPES.DEFAULT);
    });
});
