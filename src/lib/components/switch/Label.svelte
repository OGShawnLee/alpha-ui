<script lang="ts">
	import Switch from './state';
	import { GroupContext } from './Group.state';
	import { Render } from '@components';
	import type { Forwarder } from '$lib';
	import { Bridge } from '@stores';

	export let passive = false;

	const { Checked, initLabel } = Switch.getContext(false) || GroupContext.getContext();
	const { Proxy, action } = initLabel({ Label: new Bridge() });

	let className: Nullable<string> = undefined;

	export { className as class };
	export let as: RenderElementTagName = 'label';
	export let disabled: Nullable<boolean> = undefined;
	export let element: HTMLElement | undefined = undefined;
	export let use: Expand<Forwarder.Actions> = [];

	let finalUse: Forwarder.Actions;
	$: finalUse = [...use, [action, passive]];
</script>

<Render {as} bind:element {Proxy} bind:disabled class={className} use={finalUse} {...$$restProps}>
	<slot isChecked={$Checked} isDisabled={disabled} label={action} />
</Render>
