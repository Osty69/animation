<template>
	<main class="my-6">
		<section class="flex flex-col md:flex-row">
			<div class="flex items-center justify-start md:w-[800px]">
				<img
					src="/src/assets/1696520600_gas-kvas-com-p-kartinki-kvadratnie-29.jpg"
					alt="poster"
					class="flex max-w-[720px]"
				/>
			</div>
			<div class="p-4 md:w-1/2">
				<h1 class="font-old font-[900] text-[72px]">Ограбление века</h1>
				<p class="mt-2 text-[24px]">
					Макс Скайлер и его верный друг Билл Харпер решают изменить свою жизнь
					с помощью дерзкого ограбления банка. Они тщательно планируют свою
					операцию и, преодолевая неожиданные препятствия, направляются к
					заветной цели. Сумасшедшая погоня, комичные ситуации и неожиданные
					повороты событий сопровождают их на каждом шагу. <br />Смогут ли они
					достичь успеха и изменить свою судьбу, или реальность окажется куда
					сложнее, чем они предполагали? <br />
					Этот короткий анимационный фильм сочетает в себе юмор и напряжение,
					оставляя зрителя в напряжении до самого конца.
				</p>
				<div class="flex mt-8 space-x-4">
					<a
						href="https://adobe-animate-website.vercel.app/"
						class="p-3 border-2 border-black text-black-500 hover:bg-black hover:text-white transition duration-500 text-[24px] hover:opacity-50"
						>Изучить работы</a
					>
					<a
						href="https://t.me/ostych"
						class="p-3 border-2 border-black text-black-500 hover:bg-black hover:text-white transition duration-500 text-[24px] hover:opacity-50"
						>Связаться</a
					>
				</div>
				<button
					@click="scrollToAnimation"
					class="text-[24px] px-[74px] py-3 mt-4 text-white transition duration-500 bg-black border-2 border-black hover:bg-white hover:text-black hover:opacity-50"
				>
					Смотреть анимацию
				</button>
			</div>
		</section>

		<section class="mt-4">
			<h2 class="font-old font-[900] text-[48px] text-center">
				В главных ролях
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-24">
				<CharacterCard
					name="Макс Скайлер"
					description="Макс склонен к внутренним монологам, часто размышляя о своей жизни и планах. Умеет быстро адаптироваться к меняющимся обстоятельствам."
					imageUrl="src/assets/4-nikolai-chekhov-portret-antona-chekhova-fragment-1884-gosudarstvennyi-literaturnyi-muzei-moskva-jpg.webp"
				/>
				<CharacterCard
					name="Билл Харпер"
					description="Билл часто комментирует происходящее с сарказмом. Обладает хорошими навыками взлома и технической подготовки."
					imageUrl="/src/assets/zhyustin-florentino-vzglyad-devushki-s-kosoi.jpg"
				/>
			</div>
		</section>

		<section id="animation" class="mt-6">
			<h2 class="font-old font-[900] text-[48px] text-center">Анимация</h2>
			<iframe
				src="/src/assets/snake/животные.html"
				class="flex items-center justify-center w-full aspect-video"
				frameborder="0"
			></iframe>
		</section>
	</main>
</template>

<script setup>
import CharacterCard from './CharacterCard.vue'

const scrollToAnimation = () => {
	const element = document.getElementById('animation')
	element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/* Добавьте дополнительные стили здесь */
</style>
