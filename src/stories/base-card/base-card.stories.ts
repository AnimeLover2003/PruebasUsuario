// base-card.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { BaseCardComponent } from '../../app/components/base-card/base-card.component';


// Configuración básica del Story
const meta: Meta<BaseCardComponent> = {
  title: 'Components/BaseCard', // Ruta en el panel de Storybook
  component: BaseCardComponent,
  tags: ['autodocs'], // Genera documentación automática
  render: (args) => ({
    props: args,
    template: `
      <app-base-card>
        {{ content }}
      </app-base-card>
    `,
  }),
  argTypes: {
    // Define controles personalizados (opcional)

  },
};

export default meta;
type Story = StoryObj<BaseCardComponent>;

export const Default: Story = {};