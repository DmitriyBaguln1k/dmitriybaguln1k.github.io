<?php /* Smarty version 3.1.27, created on 2017-11-14 09:30:28
         compiled from "/home/s11109/www/manager/templates/default/welcome.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:13854632405a0a8d84e5f569_49868178%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'cbc2213bc50a61cd8a70c6565783c1315c9ac1bd' => 
    array (
      0 => '/home/s11109/www/manager/templates/default/welcome.tpl',
      1 => 1510640546,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '13854632405a0a8d84e5f569_49868178',
  'variables' => 
  array (
    'dashboard' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5a0a8d84e604b5_35315856',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5a0a8d84e604b5_35315856')) {
function content_5a0a8d84e604b5_35315856 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '13854632405a0a8d84e5f569_49868178';
?>
<div id="modx-panel-welcome-div"></div>

<div id="modx-dashboard" class="dashboard">
<?php echo $_smarty_tpl->tpl_vars['dashboard']->value;?>

</div><?php }
}
?>