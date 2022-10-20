import {StyleSheet, Dimensions} from 'react-native';

//Font sizes
export const $size_max = 25;
export const $size_macro = 22;
export const $size_mega = 20;
export const $size_xtra = 18;
export const $size_large = 16;
export const $size_normal = 15;
export const $size_medium = 14;
export const $size_small = 13;
export const $size_minimum = 12;
export const $size_mini = 11;
export const $size_micro = 10;
export const $size_tiny = 8;
export const FontSizeTwentyFour = 24;

//Colors
export const $basic_label_title = '#2c2c2c';
export const $basic_white = '#fff';
export const $primary_color = '#ebddfa'; //Used for buttons
export const $grey_text = '#868686';
export const $theme_light_blue = '#F4F9FF';
export const $light_blue = '#F4F9FE';
export const $disabled_btn = '#8CBDFC';
export const $default_black = '#000000';
export const $gray_text_color = '#545454';
export const $reward_text = '#2f2f2f';
export const $img_background_color = '#f0f0f0';
export const $credit_text = '#282828';
export const $link_account_text = '#242F3E';
export const $tran_light_text = '#333F48';

export const $dis_flex = 'flex';
export const $align_center = 'center';
export const $justify_center = 'center';
export const $col_flexdirec = 'column';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  main_background: {
    backgroundColor: $basic_white,
    flex: 1,
  },
  scrollview_section: {
    display: $dis_flex,
    alignItems: $align_center,
    justifyContent: $justify_center,
    flexDirection: $col_flexdirec,
    flex: 1,
  },
  align_row: {
    display: $dis_flex,
    alignItems: $align_center,
    flexDirection: 'row',
  },
  main_box: {
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: $basic_white,
    marginTop: 20,
    borderRadius: 4,
    padding: 20,
    width: windowWidth - 40,
  },
  input_section: {
    display: $dis_flex,
    flexDirection: $col_flexdirec,
  },
  mt10: {
    marginTop: 10,
  },
  btn_section: {
    marginTop: 40,
  },
});
