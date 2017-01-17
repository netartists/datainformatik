<?php
namespace Reelworx\RxUnrollsavebuttons\Xclass;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use TYPO3\CMS\Backend\Template\Components\Buttons\InputButton;
use TYPO3\CMS\Backend\Template\Components\Buttons\SplitButton;

/**
 * Xclass SplitButton to change rendering
 */
class UnrolledSplitButton extends SplitButton
{
    /**
     * Renders the HTML markup of the button
     *
     * @return string
     */
    public function render()
    {
        $settings = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['rx_unrollsavebuttons']);

        $items = $this->getButton();
        /** @var InputButton[] $buttons */
        $buttons = array_merge([ $items['primary'] ], $items['options']);

        $content = '';
        foreach ($buttons as $option) {
            $attributes = [
                'type' => 'submit',
                'class' => 'btn btn-sm btn-default ' . $option->getClasses(),
                'name' => $option->getName(),
                'value' => $option->getValue()
            ];
            $onClick = $option->getOnClick();
            if ($onClick) {
                $attributes['onclick'] = $onClick;
            }
            $form = $option->getForm();
            if ($form) {
                $attributes['form'] = $form;
            }
            $buttonTitle = $option->getTitle();
            if (!empty($settings['iconOnly'])) {
                $attributes['title'] = $buttonTitle;
                $buttonTitle = '';
            }
            $optionAttributesString = '';
            foreach ($attributes as $key => $value) {
                $optionAttributesString .= ' ' . htmlspecialchars($key) . '="' . htmlspecialchars($value) . '"';
            }
            $content .= '<button' . $optionAttributesString . '>
                ' . $option->getIcon()->render() . '
                ' . htmlspecialchars($buttonTitle) . '
            </button>';
        }

        return '<div class="btn-group">' . $content . '</div>';
    }
}
