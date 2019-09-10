<template>
	<div><!-- ROOT DIV--> 
		<div class="container p-0">
			<div class="heading-1">{{ item.rc.label }}, {{ item.square }} м<sup>2</sup> за {{ item.ppsm * item.square }} ₽ </div>
			<div class="object">
				<div class="object__photo">
					<div class="object__photo-wrapper">
						<img src="/img/slider-item/photo.png" alt="">
					</div>
					<div class="object__photo-prev">
						<img src="/img/slider-item/left.png" alt="">
					</div>
					<div class="object__photo-next">
						<img src="/img/slider-item/right.png" alt="">
					</div>

					<div class="object__photo-slider-nav slider-nav">
						<div class="slider-nav__dot slider-nav__dot--active"></div>
						<div class="slider-nav__dot"></div>
						<div class="slider-nav__dot"></div>
						<div class="slider-nav__dot"></div>
					</div>
				</div>
			
				<div class="object__desc">
					<div class="object__desc-name">
						<div class="object__desc-title">Студия, {{ item.square }} м<sup>2</sup></div>
						<div class="button-favourite">
							<i class="fas fa-heart"></i> В избранное
						</div>
					</div>

					<div class="object__desc-details">
						<div class="params">
							<div class="params__item">
								<div class="params__definition">Корпус</div>
								<div class="params__value">{{ item.building }}</div>
							</div>
							<div class="params__item">
								<div class="params__definition">Секция</div>
								<div class="params__value">1</div>
							</div>
							<div class="params__item">
								<div class="params__definition">Этаж</div>
								<div class="params__value">{{ item.floor }}</div>
							</div>
							<div class="params__item">
								<div class="params__definition">Номер</div>
								<div class="params__value">121</div>
							</div>
						</div>
					</div>

					<div class="details">
						<div class="details__row">
							<div class="details__name">Стоимость</div>
							<div class="details__value details__value--price">{{ item.ppsm * item.square }} ₽</div>
						</div>
						<div class="details__row">
							<div class="details__name">Цена за м<sup>2</sup></div>
							<div class="details__value">{{ item.ppsm }} ₽/м<sup>2</sup></div>
						</div>
					</div>

					<div class="button-order">Забронировать</div>
					<div class="button-preview">Записаться на просмотр</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="heading-slider">Галерея комплекса</div>
		</div>

		<div class="slider">
			<div class="slider__photo-wrapper">
				<div class="slider__photo">
					<img src="/img/gallery/img.jpg" alt="">
				</div>
			</div>
			<div class="slider__control slider__control--prev slider__control--disabled">
				<img src="/img/gallery/gallery-prev.png" alt="">
			</div>
			<div class="slider__control slider__control--next">
				<img src="/img/gallery/gallery-next.png" alt="">
			</div>
		</div>

		<div class="container">
			<a href="#" class="back-to-results">← Вернуться к результатам поиска</a>
		</div>
	</div><!-- // ROOT DIV-->
</template>


<script>
	export default {
		computed: {
			productId() {
				return parseInt(this.$route.params.productId)
			},

			item() {
				for (const item of this.$store.state.items) {
					if (item.id === this.productId) {
						return item
					}
				}
			}
		}
	}
</script>