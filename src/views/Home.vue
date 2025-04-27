<script setup lang="ts">
import Code from "../components/Code.vue";
import Tip from "../components/Tip.vue";
</script>

<template>
	<h1>Minecraft Server</h1>
	<h2>Basic Details</h2>
	<ul>
		<li>Server IP: <Code>157.90.28.98</Code> (default port, 25565)</li>
		<li>
			Mod framework: Fabric
			<ul>
				<li>Use <a href="https://fabricmc.net/use/installer/">this page</a> to install it as your client</li>
			</ul>
		</li>
		<li>Server set to offline mode</li>
		<li>
			Server-side mods currently installed (you don't need to download these):
			<ul>
				<li><a href="https://modrinth.com/mod/fabric-api">fabric-api-0.120.0+1.21.5</a></li>
				<li>
					<a href="https://modrinth.com/mod/skinrestorer">skinrestorer-2.3.0+1.21-fabric</a> (<a
						href="https://github.com/Suiranoil/SkinRestorer/wiki/Commands"
						>usage</a
					>)
					<ul>
						<li>
							Example usage:
							<Code>/skin set web classic "https://example.com/example.png"</Code>
							<Tip>Note the quotes around the link</Tip>
							<ul>
								<li>Note the quotes around the link</li>
								<li>Use <Code>slim</Code> instead of <Code>classic</Code> if it&#39;s a slim skin</li>
								<li>
									Use a permanent image URL (check if the URL ends with .png and can be opened without
									any login)
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					<a href="https://modrinth.com/plugin/simple-voice-chat/versions?l=fabric"
						>voicechat-fabric-1.21.5-2.5.30</a
					>
				</li>
			</ul>
		</li>
		<li>
			Client-side mods (you might want to download these):
			<ul>
				<li>
					<a href="https://modrinth.com/plugin/simple-voice-chat/versions?l=fabric"
						>voicechat-fabric-1.21.5-2.5.30</a
					>
				</li>
			</ul>
		</li>
	</ul>
	<Tip>
		Send your Minecraft usernames (<strong>case sensitive</strong>) in the
		<a href="https://discord.com/channels/988739710518169620/1362842884218425505">Discord thread</a> so I can
		whitelist you!
	</Tip>
	<h2>Notes</h2>
	<p>(helpful to those who want to set up their own Minecraft servers in the future)</p>
	<ul>
		<li>
			I am running a bare VPS with these specs: Ampere ARM64 2 cores, 4 GB RAM (currently allocating 3 GB for
			Minecraft); Ubuntu Server 24 LTS and OpenJDK 21
		</li>
		<li>
			I am using a
			<a href="https://discord.com/channels/988739710518169620/994722619150573638/1362958116425306263"
				>modified version</a
			>
			of the systemd service from
			<a href="https://github.com/WilhelmRoscher/minecraft-systemd-service-file/">here</a>, with auto-restart, 5
			seconds after crash, and a <a href="https://unix.stackexchange.com/a/612118">socket</a> to communicate with
			the service (to send commands to Minecraft console)
		</li>
		<li>Level seed: <Code>288493431</Code></li>
		<li>
			Versions:
			<ul>
				<li>Minecraft: 1.21.5</li>
				<li>
					Fabric
					<ul>
						<li>Loader: 0.16.13</li>
						<li>Launcher: 1.0.3</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</template>
<style scoped></style>
