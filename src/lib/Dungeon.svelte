<script lang="ts">
	import { Object3DInstance } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { AutoColliders } from '@threlte/rapier';

	const { gltf } = useGltf('/dungeon.glb');

	$: dungeonModel = $gltf?.scene;
	$: console.log($gltf);
</script>

{#if dungeonModel}
	<AutoColliders shape={'cuboid'}>
		<Object3DInstance
			object={dungeonModel}
			receiveShadow
			castShadow
			scale={0.01}
			position={{ x: -22.5, z: 30 }}
		/>
	</AutoColliders>
{/if}
