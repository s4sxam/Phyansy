// =============================================================================
// calculatorData.js — Calculator Equation Definitions
// Pure data + pure solve functions (zero DOM access)
// =============================================================================

export const CALC_EQS = [
  {
    id: 'nsl',
    name: "Newton's Second Law — F = ma",
    formula: 'F = m × a',
    vars: [
      { id: 'F', label: 'Force',        unit: 'N',    sym: 'F' },
      { id: 'm', label: 'Mass',         unit: 'kg',   sym: 'm' },
      { id: 'a', label: 'Acceleration', unit: 'm/s²', sym: 'a' },
    ],
    solve: {
      F: (v) => v.m * v.a,
      m: (v) => v.F / v.a,
      a: (v) => v.F / v.m,
    },
    explain: {
      F: 'That is the net force acting on the object.',
      m: 'That is the mass of the object being accelerated.',
      a: 'That is how quickly the object\'s velocity is changing.',
    },
  },
  {
    id: 'ke',
    name: 'Kinetic Energy — KE = ½mv²',
    formula: 'KE = ½ × m × v²',
    vars: [
      { id: 'KE', label: 'Kinetic Energy', unit: 'J',   sym: 'KE' },
      { id: 'm',  label: 'Mass',           unit: 'kg',  sym: 'm' },
      { id: 'v',  label: 'Speed',          unit: 'm/s', sym: 'v' },
    ],
    solve: {
      KE: (v) => 0.5 * v.m * v.v * v.v,
      m:  (v) => 2 * v.KE / (v.v * v.v),
      v:  (v) => Math.sqrt(2 * v.KE / v.m),
    },
    explain: {
      KE: 'That is the energy of motion — what it takes to bring this object to rest.',
      m:  'That is the mass required for this speed to carry that energy.',
      v:  'That is the speed of the object.',
    },
  },
  {
    id: 'ohm',
    name: "Ohm's Law — V = IR",
    formula: 'V = I × R',
    vars: [
      { id: 'V', label: 'Voltage',    unit: 'V', sym: 'V' },
      { id: 'I', label: 'Current',    unit: 'A', sym: 'I' },
      { id: 'R', label: 'Resistance', unit: 'Ω', sym: 'R' },
    ],
    solve: {
      V: (v) => v.I * v.R,
      I: (v) => v.V / v.R,
      R: (v) => v.V / v.I,
    },
    explain: {
      V: 'That is the electrical potential difference (voltage) across the component.',
      I: 'That is the current flowing through the circuit.',
      R: 'That is the resistance of the component.',
    },
  },
  {
    id: 'grav',
    name: 'Gravitational PE — U = mgh',
    formula: 'U = m × g × h',
    vars: [
      { id: 'U', label: 'Potential Energy',  unit: 'J',    sym: 'U' },
      { id: 'm', label: 'Mass',              unit: 'kg',   sym: 'm' },
      { id: 'g', label: 'Gravity (9.81)',    unit: 'm/s²', sym: 'g' },
      { id: 'h', label: 'Height',            unit: 'm',    sym: 'h' },
    ],
    solve: {
      U: (v) => v.m * v.g * v.h,
      m: (v) => v.U / (v.g * v.h),
      g: (v) => v.U / (v.m * v.h),
      h: (v) => v.U / (v.m * v.g),
    },
    explain: {
      U: 'That is the energy stored by virtue of height — it fully converts to kinetic energy upon falling.',
      m: 'That is the mass of the object at this height.',
      g: 'That is the local gravitational field strength.',
      h: 'That is the height above the reference level.',
    },
  },
  {
    id: 'photon',
    name: 'Photon Energy — E = hf',
    formula: 'E = h × f',
    vars: [
      { id: 'E', label: 'Energy',               unit: 'J',   sym: 'E' },
      { id: 'h', label: 'Planck (6.626×10⁻³⁴)', unit: 'J·s', sym: 'h' },
      { id: 'f', label: 'Frequency',            unit: 'Hz',  sym: 'f' },
    ],
    solve: {
      E: (v) => v.h * v.f,
      h: (v) => v.E / v.f,
      f: (v) => v.E / v.h,
    },
    explain: {
      E: 'That is the energy carried by a single photon at this frequency.',
      h: 'That is the Planck constant (normally 6.626×10⁻³⁴ J·s).',
      f: 'That is the frequency of the electromagnetic wave.',
    },
  },
  {
    id: 'wave',
    name: 'Wave Speed — v = fλ',
    formula: 'v = f × λ',
    vars: [
      { id: 'v',   label: 'Wave Speed',  unit: 'm/s', sym: 'v' },
      { id: 'f',   label: 'Frequency',   unit: 'Hz',  sym: 'f' },
      { id: 'lam', label: 'Wavelength',  unit: 'm',   sym: 'λ' },
    ],
    solve: {
      v:   (v) => v.f * v.lam,
      f:   (v) => v.v / v.lam,
      lam: (v) => v.v / v.f,
    },
    explain: {
      v:   'That is the speed at which the wave propagates through the medium.',
      f:   'That is the number of oscillations per second.',
      lam: 'That is the spatial distance between successive wave crests.',
    },
  },
  {
    id: 'emc2',
    name: 'Mass-Energy — E = mc²',
    formula: 'E = m × c²',
    vars: [
      { id: 'E', label: 'Energy',                  unit: 'J',   sym: 'E' },
      { id: 'm', label: 'Mass',                    unit: 'kg',  sym: 'm' },
      { id: 'c', label: 'Speed of light (3×10⁸)',  unit: 'm/s', sym: 'c' },
    ],
    solve: {
      E: (v) => v.m * v.c * v.c,
      m: (v) => v.E / (v.c * v.c),
      c: (v) => Math.sqrt(v.E / v.m),
    },
    explain: {
      E: 'That is the energy equivalent of this mass — an enormous number even for tiny masses.',
      m: 'That is the mass equivalent of this energy.',
      c: 'Normally 299,792,458 m/s — the speed of light in vacuum.',
    },
  },
];
