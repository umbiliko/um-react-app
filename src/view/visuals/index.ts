import { ReactInstance } from 'react';

import AppBarVisual from './AppBarVisual';
import AvatarVisual from './AvatarVisual';
import BackdropVisual from './BackdropVisual';
import BadgeVisual from './BadgeVisual';
import BottomNavigationActionVisual from './BottomNavigationActionVisual';
import BottomNavigationVisual from './BottomNavigationVisual';
import ButtonVisual from './ButtonVisual';
import CardActionAreaVisual from './CardActionAreaVisual';
import CardActionsVisual from './CardActionsVisual';
import CardContentVisual from './CardContentVisual';
import CardHeaderVisual from './CardHeaderVisual';
import CardMediaVisual from './CardMediaVisual';
import CardVisual from './CardVisual';
import CheckboxVisual from './CheckboxVisual';
import ChipVisual from './ChipVisual';
import CircularProgressVisual from './CircularProgressVisual';
import CollapseVisual from './CollapseVisual';
// CssBaselineVisual from './CssBaselineVisual';
import DialogActionsVisual from './DialogActionsVisual';
import DialogContentVisual from './DialogContentVisual';
import DialogContentTextVisual from './DialogContentTextVisual';
import DialogTitleVisual from './DialogTitleVisual';
import DialogVisual from './DialogVisual';
import DividerVisual from './DividerVisual';
import DrawerVisual from './DrawerVisual';
import ExpansionPanelVisual from './ExpansionPanelVisual';
import ExpansionPanelActionsVisual from './ExpansionPanelActionsVisual';
import ExpansionPanelDetailsVisual from './ExpansionPanelDetailsVisual';
import ExpansionPanelSummaryVisual from './ExpansionPanelSummaryVisual';
import FadeVisual from './FadeVisual';
import FilledInputVisual from './FilledInputVisual';
import FormControlVisual from './FormControlVisual';
import FormControlLabelVisual from './FormControlLabelVisual';
import FormGroupVisual from './FormGroupVisual';
import FormHelperTextVisual from './FormHelperTextVisual';
import FormLabelVisual from './FormLabelVisual';
import GridVisual from './GridVisual';
import GridListVisual from './GridListVisual';
import GridListTileVisual from './GridListTileVisual';
import GridListTileBarVisual from './GridListTileBarVisual';
import GrowVisual from './GrowVisual';
import HiddenVisual from './responsive/HiddenVisual';
import IconVisual from './IconVisual';
import IconButtonVisual from './IconButtonVisual';
import InputVisual from './InputVisual';
import InputAdornmentVisual from './InputAdornmentVisual';
import InputLabelVisual from './InputLabelVisual';
import LinearProgressVisual from './LinearProgressVisual';
import ListItemVisual from './ListItemVisual';
import ListItemAvatarVisual from './ListItemAvatarVisual';
import ListItemIconVisual from './ListItemIconVisual';
import ListItemSecondaryActionVisual from './ListItemSecondaryActionVisual';
import ListItemTextVisual from './ListItemTextVisual';
import ListSubheaderVisual from './ListSubheaderVisual';
import ListVisual from './ListVisual';
import { MenuItemVisual } from './MenuItemVisual';
import { MenuListVisual } from './MenuListVisual';
import { MenuVisual } from './MenuVisual';
import { MobileStepperVisual } from './MobileStepperVisual';
import ModalVisual from './ModalVisual';
import { NativeSelectVisual } from './NativeSelectVisual';
import { NoSsrVisual } from './NoSsrVisual';
import { OutlinedInputVisual } from './OutlinedInputVisual';
import PaperVisual from './PaperVisual';
import { PopoverVisual } from './PopoverVisual';
import { PopperVisual } from './PopperVisual';
import { PortalVisual } from './PortalVisual';
import { RadioVisual } from './RadioVisual';
import { RadioGroupVisual } from './RadioGroupVisual';
import { RootRefVisual } from './RootRefVisual';
import { SelectVisual } from './SelectVisual';
import SlideVisual from './SlideVisual';
import { SnackbarVisual } from './SnackbarVisual';
import { SnackbarContentVisual } from './SnackbarContentVisual';
import { StepVisual } from './StepVisual';
import { StepButtonVisual } from './StepButtonVisual';
import { StepConnectorVisual } from './StepConnectorVisual';
import { StepContentVisual } from './StepContentVisual';
import { StepIconVisual } from './StepIconVisual';
import { StepLabelVisual } from './StepLabelVisual';
import { StepperVisual } from './StepperVisual';
import { SvgIconVisual } from './SvgIconVisual';
import { SwipeableDrawerVisual } from './SwipeableDrawerVisual';
import { SwitchVisual } from './SwitchVisual';
import { TabVisual } from './TabVisual';
import { TableVisual } from './TableVisual';
import { TableBodyVisual } from './TableBodyVisual';
import { TableCellVisual } from './TableCellVisual';
import { TableFooterVisual } from './TableFooterVisual';
import { TableHeadVisual } from './TableHeadVisual';
import { TablePaginationVisual } from './TablePaginationVisual';
import { TableRowVisual } from './TableRowVisual';
import { TableSortLabelVisual } from './TableSortLabelVisual';
import { TabsVisual } from './TabsVisual';
import { TextFieldVisual } from './TextFieldVisual';
import { ToolbarVisual } from './ToolbarVisual';
import { TooltipVisual } from './TooltipVisual';
import TouchRippleVisual from './TouchRippleVisual';
import { TypographyVisual } from './TypographyVisual';
import { ZoomVisual } from './ZoomVisual';

export const Button = 'Button';
export const List = 'List';
export const Paper = 'Paper';

export interface Visual {
    AppBar: AppBarVisual;
    Avatar: AvatarVisual;
    Backdrop: BackdropVisual;
    Badge: BadgeVisual;
    BottomNavigationAction: BottomNavigationActionVisual;
    BottomNavigation: BottomNavigationVisual;
    Button: ButtonVisual;
    Card: CardVisual;
    CardActionArea: CardActionAreaVisual;
    CardActions: CardActionsVisual;
    CardContent: CardContentVisual;
    CardHeader: CardHeaderVisual;
    CardMedia: CardMediaVisual;
    Checkbox: CheckboxVisual;
    Chip: ChipVisual;
    CircularProgress: CircularProgressVisual;
    Collapse: CollapseVisual;
    Dialog: DialogVisual;
    DialogActions: DialogActionsVisual;
    DialogContent: DialogContentVisual;
    DialogContentText: DialogContentTextVisual;
    DialogTitle: DialogTitleVisual;
    Divider: DividerVisual;
    Drawer: DrawerVisual;
    ExpansionPanel: ExpansionPanelVisual;
    ExpansionPanelActions: ExpansionPanelActionsVisual;
    ExpansionPanelDetails:  ExpansionPanelDetailsVisual;
    ExpansionPanelSummary: ExpansionPanelSummaryVisual;
    Fade: FadeVisual;
    FilledInput: FilledInputVisual;
    FormControl: FormControlVisual;
    FormControlLabel: FormControlLabelVisual;
    FormGroup: FormGroupVisual;
    FormHelperText: FormHelperTextVisual;
    FormLabel: FormLabelVisual;
    Grid: GridVisual;
    GridList: GridListVisual;
    GridListTile: GridListTileVisual;
    GridListTileBar: GridListTileBarVisual;
    Grow: GrowVisual;
    Hidden: HiddenVisual;
    Icon: IconVisual;
    IconButton: IconButtonVisual;
    Input: InputVisual;
    InputAdornment: InputAdornmentVisual;
    InputLabel: InputLabelVisual;
    LinearProgress: LinearProgressVisual;
    List: ListVisual;
    ListItem: ListItemVisual;
    ListItemAvatar: ListItemAvatarVisual;
    ListItemIcon: ListItemIconVisual;
    ListItemSecondaryAction: ListItemSecondaryActionVisual;
    ListItemText: ListItemTextVisual;
    ListSubheader: ListSubheaderVisual;
    Menu: MenuVisual;
    MenuItem: MenuItemVisual;
    MenuList: MenuListVisual;
    MobileStepper: MobileStepperVisual;
    Modal: ModalVisual;
    NativeSelect: NativeSelectVisual;
    NoSsr: NoSsrVisual;
    OutlinedInput: OutlinedInputVisual;
    Paper: PaperVisual;
    Popover: PopoverVisual;
    Popper: PopperVisual;
    Portal: PortalVisual;
    Radio: RadioVisual;
    RadioGroup: RadioGroupVisual;
    RootRef: RootRefVisual;
    Select: SelectVisual;
    Slide: SlideVisual;
    Snackbar: SnackbarVisual;
    SnackbarContent: SnackbarContentVisual;
    Step: StepVisual;
    StepButton: StepButtonVisual;
    StepConnector: StepConnectorVisual;
    StepContent: StepContentVisual;
    StepIcon: StepIconVisual;
    StepLabel: StepLabelVisual;
    Stepper: StepperVisual;
    SvgIcon: SvgIconVisual;
    SwipeableDrawer: SwipeableDrawerVisual;
    Switch: SwitchVisual;
    Tab: TabVisual;
    Table: TableVisual;
    TableBody: TableBodyVisual;
    TableCell: TableCellVisual;
    TableFooter: TableFooterVisual;
    TableHead: TableHeadVisual;
    TablePagination: TablePaginationVisual;
    TableRow: TableRowVisual;
    TableSortLabel: TableSortLabelVisual;
    Tabs: TabsVisual;
    TextField: TextFieldVisual;
    Toolbar: ToolbarVisual;
    Tooltip: TooltipVisual;
    TouchRipple: TouchRippleVisual;
    Typography: TypographyVisual;
    Zoom: ZoomVisual;
}

export type Presenter = (schema: {}, events: {}, root: Visual[keyof Visual]) => ReactInstance;
