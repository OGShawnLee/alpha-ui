import type { Collectable } from '$lib';
import { destroy } from '@utils';

export function useCleanup(...collectable: (Collectable | unknown)[]) {
	return () => destroy(collectable as Collectable);
}