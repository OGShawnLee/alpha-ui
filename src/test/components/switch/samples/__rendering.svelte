<script lang="ts">
	import type { Forwarder } from '$lib';
	import { Switch, SwitchDescription, SwitchLabel } from '@components';

	interface ComponentConfig {
		as?: RenderElementTagName;
		use?: Forwarder.Actions;
		rest?: {};
	}

	export let description: ComponentConfig = {};
	export let label: ComponentConfig = {};
</script>

<Switch as="slot" let:button>
	<SwitchDescription as={description.as} use={description.use} {...description.rest}>
		Switch Description
	</SwitchDescription>
	<SwitchLabel as={label.as} use={label.use} {...label.rest}>Switch Label</SwitchLabel>
	<button use:button data-testid="switch-root" />
</Switch>
